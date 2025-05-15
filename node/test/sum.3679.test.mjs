
import sum3679 from '../sum3679.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 97 to equal 99 + offset 0.23634096994153797', (t) => {
  assert.strictEqual(sum3679(2, 97), 99 + 0.23634096994153797);
});
