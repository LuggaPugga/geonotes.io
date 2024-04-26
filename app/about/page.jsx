export default function About() {
  return (
    <div className="max-w-3xl w-full py-2 px-4">
      <h1 className="text-2xl font-bold text-black dark:text-white tracking-tight">About GeoNotes.io</h1>
      <p className="text-md text-black dark:text-white font-medium tracking-tight my-2 py-2 rounded-md">
        GeoNotes.io was created by{' '}
        <a href="https://www.geoguessr.com/user/5f0524fe657099387000f26e" className="underline">
          @geoheek
        </a>{' '}
        to help share tips about Google Street View clues from around the 🌎 (GeoNotes is not affiliated with
        GeoGuessr)
      </p>
      <p className="text-md text-black dark:text-white font-medium tracking-tight my-2 py-2 rounded-md">
        Feedback is welcome! The project is also{' '}
        <b>
          actively looking for collaborators - software engineers (Next.js) or just anyone passionate about GeoGuessr
        </b>{' '}
        to help build GeoNotes.io 👇
        <br />
        <a
          href="https://github.com/users/andrewheekin/projects/1/views/1"
          className="text-black-800 dark:text-white-800 text-md hover:text-gray-400 dark:hover:text-gray-300 underline"
        >
          Roadmap
        </a>
        <a
          href="https://github.com/andrewheekin/geonotes.io"
          className="text-black-800 dark:text-white-800 text-md ml-6 hover:text-gray-400 dark:hover:text-gray-300 underline"
        >
          GitHub
        </a>
      </p>
      <p className="text-sm text-black dark:text-white font-medium tracking-tight bg-gray-300 dark:bg-gray-700 p-4 mt-6 rounded-md">
        NOTE ON CHEATING ⛔️ This site is intended help to share tips about Google Street View clues and use
        them to get better. Please do NOT use this site to cheat on GeoGuessr. It is not fun for you or your opponents.
        It is also not fun for the GeoGuessr community.
      </p>
    </div>
  );
}
