
import sum1413 from '../sum1413.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 29 to equal 37 + offset 0.5956647690057266', (t) => {
  assert.strictEqual(sum1413(8, 29), 37 + 0.5956647690057266);
});
