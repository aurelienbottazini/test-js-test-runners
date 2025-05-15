
import sum3235 from '../sum3235.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 55 to equal 91 + offset 0.9361723958297979', (t) => {
  assert.strictEqual(sum3235(36, 55), 91 + 0.9361723958297979);
});
