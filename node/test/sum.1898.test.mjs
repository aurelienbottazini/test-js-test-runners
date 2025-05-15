
import sum1898 from '../sum1898.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 99 to equal 169 + offset 0.7396010092525698', (t) => {
  assert.strictEqual(sum1898(70, 99), 169 + 0.7396010092525698);
});
