
import sum2377 from '../sum2377.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 41 to equal 126 + offset 0.8780700351524756', (t) => {
  assert.strictEqual(sum2377(85, 41), 126 + 0.8780700351524756);
});
