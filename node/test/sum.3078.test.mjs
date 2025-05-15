
import sum3078 from '../sum3078.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 39 to equal 101 + offset 0.6727468181400122', (t) => {
  assert.strictEqual(sum3078(62, 39), 101 + 0.6727468181400122);
});
