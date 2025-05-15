
import sum3700 from '../sum3700.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 65 to equal 131 + offset 0.49802904718005037', (t) => {
  assert.strictEqual(sum3700(66, 65), 131 + 0.49802904718005037);
});
