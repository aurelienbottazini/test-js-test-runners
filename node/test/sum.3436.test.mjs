
import sum3436 from '../sum3436.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 68 to equal 82 + offset 0.7852040973049411', (t) => {
  assert.strictEqual(sum3436(14, 68), 82 + 0.7852040973049411);
});
