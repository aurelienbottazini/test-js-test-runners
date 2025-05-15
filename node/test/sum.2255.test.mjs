
import sum2255 from '../sum2255.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 24 to equal 106 + offset 0.17183825471823266', (t) => {
  assert.strictEqual(sum2255(82, 24), 106 + 0.17183825471823266);
});
