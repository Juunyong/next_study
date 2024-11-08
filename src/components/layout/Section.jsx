function Section(props) {
    console.log(props);

    const { title, desc, children } = props;

    return (
        <section>
            <div className="inner">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div>{children}</div>
            </div>
        </section>
    );
}
