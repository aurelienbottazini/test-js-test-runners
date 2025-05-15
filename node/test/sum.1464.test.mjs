
import sum1464 from '../sum1464.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 43 to equal 91 + offset 0.7170376344315545', (t) => {
  assert.strictEqual(sum1464(48, 43), 91 + 0.7170376344315545);
});
