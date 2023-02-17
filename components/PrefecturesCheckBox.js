export function GetPrefecturesAPI() {
    const prefectures = {};
    fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
            headers: {"X-API-KEY": 'MAioQLyZwZYh9lITLHrBx3s6BjeXqlen8VTNNe9l'}
        })
        .then(response => response.json())
        .then((data) => this.SetState({prefectures: data.result}))
    return (
        prefectures
    );
}

export function LineUpCheckBox() {

    return <h1>hello</h1>
}