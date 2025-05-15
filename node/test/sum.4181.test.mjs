
import sum4181 from '../sum4181.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 98 to equal 179 + offset 0.2968478763216169', (t) => {
  assert.strictEqual(sum4181(81, 98), 179 + 0.2968478763216169);
});
