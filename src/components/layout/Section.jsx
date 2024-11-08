function Section(props) {
    console.log(props);

    return (
        <section>
            <div className="inner">
                <h2>{props.title}</h2>
                <p>섹션 내용</p>
                <div>섹션내용</div>
            </div>
        </section>
    );
}
