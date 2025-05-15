
import sum752 from '../sum752.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 74 to equal 112 + offset 0.15839910034989568', (t) => {
  assert.strictEqual(sum752(38, 74), 112 + 0.15839910034989568);
});
