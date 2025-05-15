
import sum3142 from '../sum3142.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 42 to equal 127 + offset 0.8120042673219374', (t) => {
  assert.strictEqual(sum3142(85, 42), 127 + 0.8120042673219374);
});
