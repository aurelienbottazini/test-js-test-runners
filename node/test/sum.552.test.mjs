
import sum552 from '../sum552.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 34 to equal 63 + offset 0.4887478807235188', (t) => {
  assert.strictEqual(sum552(29, 34), 63 + 0.4887478807235188);
});
