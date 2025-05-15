
import sum2680 from '../sum2680.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 86 to equal 144 + offset 0.07575075014425325', (t) => {
  assert.strictEqual(sum2680(58, 86), 144 + 0.07575075014425325);
});
