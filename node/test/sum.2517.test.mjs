
import sum2517 from '../sum2517.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 46 to equal 78 + offset 0.21151150378865036', (t) => {
  assert.strictEqual(sum2517(32, 46), 78 + 0.21151150378865036);
});
