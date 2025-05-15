
import sum1706 from '../sum1706.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 21 to equal 30 + offset 0.6370992126098789', (t) => {
  assert.strictEqual(sum1706(9, 21), 30 + 0.6370992126098789);
});
