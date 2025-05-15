
import sum2855 from '../sum2855.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 93 to equal 109 + offset 0.5941749049768952', (t) => {
  assert.strictEqual(sum2855(16, 93), 109 + 0.5941749049768952);
});
