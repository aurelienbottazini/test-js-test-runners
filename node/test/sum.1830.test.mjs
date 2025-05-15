
import sum1830 from '../sum1830.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 78 to equal 117 + offset 0.11743827945962348', (t) => {
  assert.strictEqual(sum1830(39, 78), 117 + 0.11743827945962348);
});
