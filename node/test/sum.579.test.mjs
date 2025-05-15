
import sum579 from '../sum579.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 46 to equal 115 + offset 0.28486926085156794', (t) => {
  assert.strictEqual(sum579(69, 46), 115 + 0.28486926085156794);
});
