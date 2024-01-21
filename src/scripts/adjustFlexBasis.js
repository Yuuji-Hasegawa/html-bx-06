export const cellAdjust = () => {
  function adjustFlexBasis() {
    // c-reel-viewに対して処理
    document.querySelectorAll(".c-reel-view").forEach((reelView) => {
      // 各c-reel-rowを取得
      const reelRows = reelView.querySelectorAll(".c-reel-row");

      // 最大の幅を保持する変数を初期化
      let maxWidth = 0;

      // 各c-reel-rowに対して処理
      reelRows.forEach((reelRow) => {
        // 各c-reel-row内のo-box--table-cellを取得
        const tableCells = reelRow.querySelectorAll(".o-box--table-cell");

        // 子要素が3つ以上の場合にのみ処理を実行
        if (tableCells.length >= 3) {
          // 各o-box--table-cellの幅を比較して最大のものを取得
          tableCells.forEach((cell) => {
            const cellWidth = cell.getBoundingClientRect().width;
            maxWidth = Math.max(maxWidth, cellWidth);
          });
        }
      });

      // 各c-reel-rowのo-box--table-cellに統一したflex-basisを設定
      reelRows.forEach((reelRow) => {
        const tableCells = reelRow.querySelectorAll(".o-box--table-cell");
        tableCells.forEach((cell) => {
          cell.style.flexBasis = `${maxWidth}px`;
        });
      });
    });
  }
  window.addEventListener("load", () => {
    adjustFlexBasis();
  });
};
