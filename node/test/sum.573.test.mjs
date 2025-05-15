
import sum573 from '../sum573.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 25 to equal 49 + offset 0.30956783305061863', (t) => {
  assert.strictEqual(sum573(24, 25), 49 + 0.30956783305061863);
});
