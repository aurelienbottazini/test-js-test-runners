
import sum891 from '../sum891.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 91 to equal 165 + offset 0.024616040824316898', (t) => {
  assert.strictEqual(sum891(74, 91), 165 + 0.024616040824316898);
});
