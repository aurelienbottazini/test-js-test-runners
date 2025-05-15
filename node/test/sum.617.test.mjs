
import sum617 from '../sum617.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 50 to equal 53 + offset 0.5408471836624076', (t) => {
  assert.strictEqual(sum617(3, 50), 53 + 0.5408471836624076);
});
