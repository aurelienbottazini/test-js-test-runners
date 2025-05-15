
import sum924 from '../sum924.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 93 to equal 120 + offset 0.5092849980418911', (t) => {
  assert.strictEqual(sum924(27, 93), 120 + 0.5092849980418911);
});
