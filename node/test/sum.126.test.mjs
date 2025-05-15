
import sum126 from '../sum126.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 45 to equal 131 + offset 0.9689795157264477', (t) => {
  assert.strictEqual(sum126(86, 45), 131 + 0.9689795157264477);
});
