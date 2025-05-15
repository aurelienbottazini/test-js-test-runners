
import sum3363 from '../sum3363.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 76 to equal 108 + offset 0.35334429680256907', (t) => {
  assert.strictEqual(sum3363(32, 76), 108 + 0.35334429680256907);
});
