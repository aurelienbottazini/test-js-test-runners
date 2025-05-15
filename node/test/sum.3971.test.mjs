
import sum3971 from '../sum3971.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 4 to equal 76 + offset 0.9780723200157756', (t) => {
  assert.strictEqual(sum3971(72, 4), 76 + 0.9780723200157756);
});
