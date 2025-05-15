
import sum4944 from '../sum4944.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 89 to equal 184 + offset 0.9694201842281841', (t) => {
  assert.strictEqual(sum4944(95, 89), 184 + 0.9694201842281841);
});
