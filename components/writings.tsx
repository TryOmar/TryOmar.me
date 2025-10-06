'use client'

import { ExternalLink, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

const writingCategories = [
  "All",
  "Medium Articles",
  "LeetCode Solutions", 
  "Codeforces Blogs"
]

interface Writing {
  title: string
  description: string
  source: string
  url: string
  createdAt: string
  tags: string[]
  category: string
  featured: boolean
}

const writings: Writing[] = [
  // Medium Articles
  {
    title: "Why I'm Retiring from Chess",
    description: "Why I'm Retiring from Chess",
    source: "Medium",
    url: "https://medium.com/@TryOmar/why-im-retiring-from-chess-63dd80a744bf?source=rss-2a69b192fae1------2",
    createdAt: "2025-09-01",
    tags: ["chess-obsession", "why-i-quit-chess", "chess-addiction", "quitting-chess", "downsides-of-chess"],
    category: "Medium Articles",
    featured: true,
  },
  {
    title: "Desperation to Abundance: What Someone Learned After Applying to 100+ Jobs",
    description: "Desperation to Abundance: What Someone Learned After Applying to 100+ Jobs",
    source: "Medium",
    url: "https://medium.com/@TryOmar/desperation-to-abundance-what-someone-learned-after-applying-to-100-jobs-0da42ac5e8d5?source=rss-2a69b192fae1------2",
    createdAt: "2025-05-05",
    tags: ["persistence", "mindset", "job-search", "motivation", "opportunities-for-all"],
    category: "Medium Articles",
    featured: true,
  },
  {
    title: "Black/White AI Technique for Studying from Books",
    description: "Black/White AI Technique for Studying from Books",
    source: "Medium",
    url: "https://medium.com/@TryOmar/black-white-ai-technique-for-studying-from-books-bd97990ef8cc?source=rss-2a69b192fae1------2",
    createdAt: "2025-01-12",
    tags: ["productivity", "notetaking", "study-tips", "ai", "reading"],
    category: "Medium Articles",
    featured: false,
  },
  {
    title: "Commit Types: A Better Way to Organize Your Commits",
    description: "Commit Types: A Better Way to Organize Your Commits",
    source: "Medium",
    url: "https://medium.com/@TryOmar/commit-types-a-better-way-to-organize-your-commits-7caa2f803763?source=rss-2a69b192fae1------2",
    createdAt: "2024-10-30",
    tags: ["documentation", "commit-messages", "git", "version-control"],
    category: "Medium Articles",
    featured: false,
  },
  {
    title: "Manipulation Tactics Uncovered: How to Stay One Step Ahead",
    description: "Manipulation Tactics Uncovered: How to Stay One Step Ahead",
    source: "Medium",
    url: "https://medium.com/@TryOmar/manipulation-tactics-uncovered-how-to-stay-one-step-ahead-cc3bd087ecef?source=rss-2a69b192fae1------2",
    createdAt: "2024-10-08",
    tags: ["curiosity", "communication", "negotiation", "manipulation", "pyschology"],
    category: "Medium Articles",
    featured: false,
  },

  // LeetCode Solutions
  {
    title: "Simple Easy C++ Solution | Using Row Pattern Frequency | O(n * m)",
    description: "Flip Columns For Maximum Number of Equal Rows",
    source: "LeetCode",
    url: "https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6070436/simple-easy-c-solution-using-row-pattern-gyqf/",
    createdAt: "2024-11-22",
    tags: ["Flip Columns For Maximum Number of Equal Rows"],
    category: "LeetCode Solutions",
    featured: true,
  },
  {
    title: "Beats 100% Time: In-Place Memory, One-Pass Loop, No Modulus, Short C++ Code",
    description: "Defuse the Bomb",
    source: "LeetCode",
    url: "https://leetcode.com/problems/defuse-the-bomb/solutions/6056548/beats-100-time-in-place-memory-one-pass-85jlz/",
    createdAt: "2024-11-18",
    tags: ["Defuse the Bomb"],
    category: "LeetCode Solutions",
    featured: true,
  },
  {
    title: "Beats 98%: Short Easy-to-Understand Two-Pointer Sliding Window & Bit Counting Class",
    description: "Shortest Subarray With OR at Least K II",
    source: "LeetCode",
    url: "https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6028431/beats-98-short-easy-to-understand-two-po-nzjr/",
    createdAt: "2024-11-10",
    tags: ["Shortest Subarray With OR at Least K II"],
    category: "LeetCode Solutions",
    featured: true,
  },
  {
    title: "2-Line Easy Solution: sort then return is_sorted beats 100%✅",
    description: "Find if Array Can Be Sorted",
    source: "LeetCode",
    url: "https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6013380/2-line-easy-solution-sort-then-return-is-196l/",
    createdAt: "2024-11-06",
    tags: ["Find if Array Can Be Sorted"],
    category: "LeetCode Solutions",
    featured: false,
  },
  {
    title: "Medium or Hard? Just an Easy Two-Pointer Solution: O(n) Time and 100% Memory (1)",
    description: "Take K of Each Character From Left and Right",
    source: "LeetCode",
    url: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/6064210/medium-or-hard-just-an-easy-two-pointer-rya07/",
    createdAt: "2024-11-20",
    tags: ["Take K of Each Character From Left and Right"],
    category: "LeetCode Solutions",
    featured: false,
  },
  {
    title: "3-Line C++ Easy Solution without Loops",
    description: "Most Beautiful Item for Each Query",
    source: "LeetCode",
    url: "https://leetcode.com/problems/most-beautiful-item-for-each-query/solutions/6035304/3-line-c-easy-solution-without-loops-by-41d7w/",
    createdAt: "2024-11-12",
    tags: ["Most Beautiful Item for Each Query"],
    category: "LeetCode Solutions",
    featured: false,
  },
  {
    title: "Misleading Constraint although Solution is just One-Pass O(N)",
    description: "Max Chunks To Make Sorted",
    source: "LeetCode",
    url: "https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/6161816/misleading-constraint-although-solution-tuhqc/",
    createdAt: "2024-12-19",
    tags: ["Max Chunks To Make Sorted"],
    category: "LeetCode Solutions",
    featured: false,
  },
  {
    title: "100% Time & Memory | Simple One-Pass C++ Solution in 5 Lines",
    description: "Find the Power of K-Size Subarrays I",
    source: "LeetCode",
    url: "https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6050249/100-time-memory-simple-one-pass-c-soluti-66i2/",
    createdAt: "2024-11-16",
    tags: ["Find the Power of K-Size Subarrays I"],
    category: "LeetCode Solutions",
    featured: false,
  },
  {
    title: "Single-Pass Sliding Window with No If Conditions – One-Pass O(N) Solution That Beats 100%",
    description: "Minimum Recolors to Get K Consecutive Black Blocks",
    source: "LeetCode",
    url: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/6511381/single-pass-sliding-window-with-no-if-co-xt16/",
    createdAt: "2025-03-08",
    tags: ["Minimum Recolors to Get K Consecutive Black Blocks"],
    category: "LeetCode Solutions",
    featured: false,
  },
  {
    title: "One-Line Solution | Beats 100% | C++",
    description: "Final Array State After K Multiplication Operations I",
    source: "LeetCode",
    url: "https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/6150516/one-line-solution-beats-100-c-by-benjami-9wx0/",
    createdAt: "2024-12-16",
    tags: ["Final Array State After K Multiplication Operations I"],
    category: "LeetCode Solutions",
    featured: false,
  },

  // Codeforces Blogs
  {
    title: "Ordered Set with Custom Sorting Operator in C++",
    description: "Ordered Set with Custom Sorting Operator in C++",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/123624",
    createdAt: "2023-12-22",
    tags: ["ordered sets", "c++", "sorting", "operator overload", "ordered multiset", "ordered_set", "ordered_multiset"],
    category: "Codeforces Blogs",
    featured: true,
  },
  {
    title: "Custom Sorting in C++ Set Container",
    description: "Custom Sorting in C++ Set Container",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/120268",
    createdAt: "2023-09-10",
    tags: ["c++ stl", "sort", "set", "custom sort", "opeartor overload"],
    category: "Codeforces Blogs",
    featured: true,
  },
  {
    title: "C++ '&' Operator: Understanding the Difference Between Memory Addresses and Aliases (References)",
    description: "C++ '&' Operator: Understanding the Difference Between Memory Addresses and Aliases (References)",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/111259",
    createdAt: "2023-01-11",
    tags: ["c++", "reference", "alias", "memory address", "pointer", "reference function", "scope", "function return", "frequency array", "index - 1"],
    category: "Codeforces Blogs",
    featured: true,
  },
  {
    title: "Code Collection Covering Bubble Sort, Binary Search, Lower Bound, Frequency, and Prefix Sum",
    description: "Code Collection Covering Bubble Sort, Binary Search, Lower Bound, Frequency, and Prefix Sum",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/118753",
    createdAt: "2023-07-28",
    tags: ["bubble sort", "binary search", "lower bound", "frequency array", "prefix sum", "c++"],
    category: "Codeforces Blogs",
    featured: false,
  },
  {
    title: "Recursion using main() function",
    description: "Recursion using main() function",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/103617",
    createdAt: "2022-06-07",
    tags: ["recursion", "easy", "new"],
    category: "Codeforces Blogs",
    featured: false,
  },
  {
    title: "Rotation — Different Methods for Shifting Elements",
    description: "Rotation — Different Methods for Shifting Elements",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/119248",
    createdAt: "2023-08-11",
    tags: ["shifting", "rotation", "vector", "built-in functions", "array"],
    category: "Codeforces Blogs",
    featured: false,
  },
  {
    title: "Creating Your Own Codeforces Group",
    description: "Creating Your Own Codeforces Group",
    source: "Codeforces",
    url: "https://codeforces.com/blog/entry/120346",
    createdAt: "2023-09-12",
    tags: ["group creation", "create group", "contest creation", "create contest", "codeforces contests", "coding community", "codeforces", "codeforces tutorial"],
    category: "Codeforces Blogs",
    featured: false,
  },
]

const ITEMS_PER_PAGE = 6

export function Writings() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredWritings = selectedCategory === "All" 
    ? writings 
    : writings.filter(writing => writing.category === selectedCategory)

  const totalPages = Math.ceil(filteredWritings.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentWritings = filteredWritings.slice(startIndex, endIndex)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <section id="writings" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Writings</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {writingCategories.map((category) => {
              const count = category === "All" 
                ? writings.length 
                : writings.filter(w => w.category === category).length
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className="text-sm"
                >
                  {category} ({count})
                </Button>
              )
            })}
          </div>

          {/* Writings Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {currentWritings.map((writing, index) => (
              <Card key={index} className="p-4 flex flex-col hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold line-clamp-2">{writing.title}</h3>
                  <div className="flex items-center gap-1">
                    {writing.featured && (
                      <Badge variant="secondary" className="text-xs">Featured</Badge>
                    )}
                    <Badge variant="outline" className="text-xs">{writing.source}</Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-3 leading-relaxed flex-grow text-sm line-clamp-2">
                  {writing.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {writing.source !== "LeetCode" && writing.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formatDate(writing.createdAt)}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" asChild className="mt-auto">
                  <a href={writing.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Read on {writing.source}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className="w-8 h-8 p-0"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Writing Count */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredWritings.length)} of {filteredWritings.length} writings
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </div>
        </div>
      </div>
    </section>
  )
}
