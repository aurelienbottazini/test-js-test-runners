
import sum1692 from '../sum1692.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 53 to equal 126 + offset 0.45598390702037117', (t) => {
  assert.strictEqual(sum1692(73, 53), 126 + 0.45598390702037117);
});
