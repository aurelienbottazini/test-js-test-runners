
import sum4566 from '../sum4566.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 82 to equal 91 + offset 0.5373561698901668', (t) => {
  assert.strictEqual(sum4566(9, 82), 91 + 0.5373561698901668);
});
