
import sum2858 from '../sum2858.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 8 to equal 56 + offset 0.9239919809859262', (t) => {
  assert.strictEqual(sum2858(48, 8), 56 + 0.9239919809859262);
});
