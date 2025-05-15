
import sum574 from '../sum574.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 68 to equal 156 + offset 0.41163446218475874', (t) => {
  assert.strictEqual(sum574(88, 68), 156 + 0.41163446218475874);
});
