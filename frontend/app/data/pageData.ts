export const headerCardsData = [
    {
        id: 1,
        title: 'Multiplatform Mobile',
        subTitle: 'Share the logic of your Android and iOS apps while keeping UX native',
        link: '#',
        img: '/assets/images/good-for/mobile.svg'
    },
    {
        id: 2,
        title: 'Server-side',
        subTitle: 'Modern development experience with familiar JVM technology',
        link: '#',
        img: '/assets/images/good-for/server-side.svg'
    },
    {
        id: 3,
        title: 'Web Frontend',
        subTitle: 'Extend your projects to web',
        link: '#',
        img: '/assets/images/good-for/web.svg'
    },
    {
        id: 4,
        title: 'Android',
        subTitle: 'Recommended by Google for building Android apps',
        link: '#',
        img: '/assets/images/good-for/android.svg'
    },
]

export const testimonialsData = [
    {
        company: 'Gradle',
        logo: '/assets/images/companies/gradle.svg',
        url: 'https://blog.gradle.org/kotlin-meets-gradle',
        text: 'Gradle is introducing Kotlin as a language for writing build scripts',
    },
    {
        company: 'Corda',
        logo: '/assets/images/companies/corda.svg',
        url: 'https://www.corda.net/2017/01/10/kotlin/',
        text: 'Corda is an open-source distributed ledger platform, supported by major banks, and built entirely in Kotlin',
    },
    {
        company: 'Evernote',
        logo: '/assets/images/companies/evernote.svg',
        url: 'https://blog.evernote.com/tech/2017/01/26/android-state-library/',
        text: 'Evernote recently integrated Kotlin into their Android client',
    },
    {
        company: 'Coursera',
        logo: '/assets/images/companies/coursera.svg',
        url: 'https://building.coursera.org/blog/2016/03/16/becoming-bilingual-coursera/',
        text: 'Coursera Android app is partially written in Kotlin',
    },
    {
        company: 'Spring',
        logo: '/assets/images/companies/spring.svg',
        url: 'https://spring.io/blog/2017/01/04/introducing-kotlin-support-in-spring-framework-5-0',
        text: "Spring makes use of Kotlin's language features to offer more concise APIs",
    },
    {
        company: 'Atlassian',
        logo: '/assets/images/companies/atlassian.svg',
        url: 'https://twitter.com/danlew42/status/809065097339564032',
        text: 'All new code in the Trello Android app is in Kotlin',
    },
];

export const newsData = [
    {
        title: 'Kotlin 1.6.0 is released',
        link: 'https://blog.jetbrains.com/kotlin/2021/11/kotlin-1-6-0-is-released/',
        tag: 'blog.jetbrains.com',
    },
    {
        title: 'The new AWS SDK for Kotlin with Coroutines support',
        link: 'https://blog.jetbrains.com/kotlin/2022/01/the-new-aws-sdk-for-kotlin-with-coroutines-support/',
        tag: 'blog.jetbrains.com',
    },
    {
        title: 'Introducing kotlinx.coroutines 1.6.0',
        link: 'https://blog.jetbrains.com/kotlin/2021/12/introducing-kotlinx-coroutines-1-6-0/',
        tag: 'blog.jetbrains.com',
    },
    {
        title: 'Results of the Kotlin Features Survey 2021',
        link: 'https://blog.jetbrains.com/kotlin/2021/12/kotlin-features-survey-2021-results/',
        tag: 'blog.jetbrains.com',
    },
];

export const programmingLanguageTabs = [
    {
        title: 'Concise',
        code: `data class Employee(
   val name: String,
   val email: String,
   val company: String
) // + automatically generated equals(), hashCode(), toString(), and copy()

object MyCompany {                                // A singleton
   const val name: String = "MyCompany"
}

fun main() {                                      // Function at the top level
   val employee = Employee("Alice",               // No \`new\` keyword
      "alice@mycompany.com", MyCompany.name)
   println(employee)
}`,
    },
    {
        title: 'Safe',
        code: `fun reply(condition: Boolean): String? =          // Nullability is part of Kotlin's type system
   if (condition) "I'm fine" else null

fun error(): Nothing =                            // Always throw an exception
   throw IllegalStateException("Shouldn't be here")

fun main() {
   val condition = true                        // Try replacing \`true\` with \`false\` and run the sample!
   val message = reply(condition)              // The result is nullable
   // println(message.uppercase())             // This line doesn't compile
   println(message?.replace("fine", "okay"))   // Access a nullable value in a safe manner
   if (message != null) {                      // If you check that the type is right,
      println(message.uppercase())             // the compiler will smart-cast it for you
   }

   val nonNull: String =                             // If the null-case throws an error,
   reply(condition = true) ?: error()             // Kotlin can infer that the result is non-null
   println(nonNull)
}`,
    },
    {
        title: 'Expressive',
        code: `fun main() {
   val map = mapOf(1 to "one", 2 to "two")
   for ((k, v) in map) {                            // Traverse a map or a list of pairs
       println("$k -> $v")
   }

   fun obtainKnowledge() = Pair("The Answer", 42)   // Single-expression functions

   val (description, answer) = obtainKnowledge()    // Destructure into a pair of two variables
   println("$description: $answer")

   getText()?.let {                                 // Apply an action to a nullable expression
      sendEmailTo("alice@example.com", it)          // if it's not null
   }

   createEmptyWindow()
      .apply {                                    // Configure properties of an object
         width = 300
         height = 200
         isVisible = true
      }.also { w ->                               // Perform an additional operation on a call chain
         showWindow(w)
      }

   val fixedIssue = issueById["13456"]
       ?.takeIf { it.status == Status.FIXED }       // Use the value only if the condition is true
   println(fixedIssue)
}`,
    },
    {
        title: 'Interoperable',
        code: `// Use any existing JVM library or framework
// Call Kotlin code from Java without an issue

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
   runApplication<DemoApplication>(*args)
}

@RestController
class MessageResource {
   @GetMapping
   fun index(): List<Message> = listOf(
      Message("1", "Hello!"),
      Message("2", "Bonjour!"),
      Message("3", "Privet!"),
   )
}

data class Message(val id: String?, val text: String)`,
    },
    {
        title: 'Multiplatform',
        code: `// Common
// Declare signatures to use them in the common code
// Provide platform-specific implementations in the platform modules
expect fun randomUUID(): String

expect class PlatformSocket(
       url: String
) {
    fun openSocket(listener: PlatformSocketListener)
    fun closeSocket(code: Int, reason: String)
    fun sendMessage(msg: String)
}

interface PlatformSocketListener {
    fun onOpen()
    fun onFailure(t: Throwable)
    fun onMessage(msg: String)
    fun onClosing(code: Int, reason: String)
}`,
    },
];

export const whyKotlinSections = [
    {
        title: 'A productive way to write server-side applications',
        description: 'Compatible with the Java ecosystem. Use your favorite JVM frameworks and libraries.',
        buttonText: 'Learn more',
        buttonLink: '/lp/server-side/',
        media: 'youtube',
        youtubeId: '8xAH7RU0Y44',
    },
    {
        title: 'Cross-platform layer for native applications',
        description:
            'Share application logic between web, mobile, and desktop platforms while keeping ' +
            'an experience native to users.\n\n' +
            'Save time and get the benefit of unlimited access to features specific to these platforms.',
        buttonText: 'Learn about Kotlin Multiplatform',
        buttonLink: '/docs/multiplatform.html',
        media: 'image',
    },
    {
        title: 'Big, friendly and helpful community',
        description:
            'Kotlin has great support and many contributors in its fast-growing global community. ' +
            'Enjoy the benefits of a rich ecosystem with a wide range of community libraries. ' +
            'Help is never far away — consult extensive community resources or ask the Kotlin team directly.',
        buttonText: 'Join the community',
        buttonLink: '/community/',
        media: 'youtube',
        youtubeId: 'JGvk4M0Rfxo',
    },
];
