
import sum1565 from '../sum1565.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 65 to equal 95 + offset 0.9592185096487231', (t) => {
  assert.strictEqual(sum1565(30, 65), 95 + 0.9592185096487231);
});
