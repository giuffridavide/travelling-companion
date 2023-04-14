import pandas as pd
import json

df_json = []
for table_name in ["user", "trip"]:
    df = pd.read_csv(f"trip/fixtures/{table_name}.csv")
    for idx, row in df.iterrows():
        tmp_dict = row.to_dict()
        df_json.append({"model": f"trip.{table_name}",
                        "pk": idx,
                        "fields": tmp_dict})

with open(f"trip/fixtures/dump.json", "w") as fout:
    json.dump(df_json, fout, indent=4)