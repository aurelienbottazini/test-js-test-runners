
import sum2775 from '../sum2775.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 27 to equal 118 + offset 0.6394332709181997', (t) => {
  assert.strictEqual(sum2775(91, 27), 118 + 0.6394332709181997);
});
