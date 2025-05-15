
import sum123 from '../sum123.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 10 to equal 53 + offset 0.5497079975039475', (t) => {
  assert.strictEqual(sum123(43, 10), 53 + 0.5497079975039475);
});
