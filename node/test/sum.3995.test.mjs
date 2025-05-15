
import sum3995 from '../sum3995.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 40 to equal 53 + offset 0.91852136521463', (t) => {
  assert.strictEqual(sum3995(13, 40), 53 + 0.91852136521463);
});
