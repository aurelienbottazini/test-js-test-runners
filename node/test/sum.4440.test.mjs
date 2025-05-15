
import sum4440 from '../sum4440.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 49 to equal 55 + offset 0.8371804631645905', (t) => {
  assert.strictEqual(sum4440(6, 49), 55 + 0.8371804631645905);
});
