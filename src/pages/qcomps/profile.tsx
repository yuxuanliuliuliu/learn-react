type Profile = {
    name: string;
    src: string;
    alt: string;
    profession: string;
    awards: string;
    discoveries: string;
  };

export default function Profile({ name, src, alt, profession, awards, discoveries }: Profile) {
    return (
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={src}
          alt={alt}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: </b>
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discoveries}
          </li>
        </ul>
      </section>
    );
  }