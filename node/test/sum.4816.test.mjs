
import sum4816 from '../sum4816.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 79 to equal 96 + offset 0.23448906726803798', (t) => {
  assert.strictEqual(sum4816(17, 79), 96 + 0.23448906726803798);
});
