
import sum1946 from '../sum1946.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 51 to equal 144 + offset 0.8010676679072475', (t) => {
  assert.strictEqual(sum1946(93, 51), 144 + 0.8010676679072475);
});
