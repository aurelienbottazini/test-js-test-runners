
import sum3083 from '../sum3083.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 42 to equal 100 + offset 0.4047841575832759', (t) => {
  assert.strictEqual(sum3083(58, 42), 100 + 0.4047841575832759);
});
