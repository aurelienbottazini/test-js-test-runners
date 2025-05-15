
import sum4922 from '../sum4922.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 48 to equal 139 + offset 0.3860689352475912', (t) => {
  assert.strictEqual(sum4922(91, 48), 139 + 0.3860689352475912);
});
