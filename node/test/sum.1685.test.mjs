
import sum1685 from '../sum1685.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 42 to equal 99 + offset 0.40891570654342735', (t) => {
  assert.strictEqual(sum1685(57, 42), 99 + 0.40891570654342735);
});
