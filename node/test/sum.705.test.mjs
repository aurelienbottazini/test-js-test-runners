
import sum705 from '../sum705.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 17 to equal 25 + offset 0.8942738614264651', (t) => {
  assert.strictEqual(sum705(8, 17), 25 + 0.8942738614264651);
});
