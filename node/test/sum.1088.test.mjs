
import sum1088 from '../sum1088.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 3 to equal 50 + offset 0.40902174645107325', (t) => {
  assert.strictEqual(sum1088(47, 3), 50 + 0.40902174645107325);
});
